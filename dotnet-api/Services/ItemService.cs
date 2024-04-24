using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnet_api.Dtos.Item;
using dotnet_api.Interfaces;
using dotnet_api.Models;

namespace dotnet_api.Services
{
    public class ItemService : IItemService
    {
       private readonly IItemRepository _itemRepository;

    public ItemService(IItemRepository itemRepository)
    {
        _itemRepository = itemRepository;
    }

    public async Task<IEnumerable<Item>> GetItems()
    {
        var items = _itemRepository.GetAllItems().ToList();

        await Task.WhenAll(items.Select(async item =>
        {
            item.Factorial = (ulong)await CalculateFactorial.FactorialAsync(item.Id);
        }));

        return items;
    }

    public Item GetItemById(int id)
    {
        return _itemRepository.GetItemById(id);
    }

    public Item CreateItem(CreateItemDto item)
    {
        if (item == null)
            throw new ArgumentException("Item cannot be null.");

        return _itemRepository.CreateItem(item);
    }
    }
}