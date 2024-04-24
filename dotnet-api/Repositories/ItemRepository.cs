using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnet_api.Dtos.Item;
using dotnet_api.Exceptions;
using dotnet_api.Interfaces;
using dotnet_api.Models;

namespace dotnet_api.Repositories
{
    public class ItemRepository : IItemRepository
    {
        private readonly List<Item> _items = [];
        private int _nextId = 1;

        public IEnumerable<Item> GetAllItems()
        {
            return _items;
        }

        public Item GetItemById(int id)
        {
            var item = _items.FirstOrDefault(item => item.Id == id) ?? throw new ItemNotFoundException(id);

            return item;
        }

        public Item CreateItem(CreateItemDto item)
        {
            ArgumentNullException.ThrowIfNull(item);

            // Create a new Item instance and map properties from the DTO
            var newItem = new Item
            {
                Name = item.Name,
                Description = item.Description,
                Price = item.Price,
                Quantity = item.Quantity,
                Category = item.Category,
                ImageUrl = item.ImageUrl,
                CreatedAt = DateTime.Now // Setting server-side
            };

            newItem.Id = _nextId++; // Set ID server-side, ensure _nextId is thread-safe if needed

            _items.Add(newItem);
            return newItem;
        }
    }
}