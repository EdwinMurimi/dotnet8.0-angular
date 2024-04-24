using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnet_api.Dtos.Item;
using dotnet_api.Models;

namespace dotnet_api.Interfaces
{
    public interface IItemRepository
    {
        IEnumerable<Item> GetAllItems();
        Item GetItemById(int id);
        Item CreateItem(CreateItemDto item);
    }
}