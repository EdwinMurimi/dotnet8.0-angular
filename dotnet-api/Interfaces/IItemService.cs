using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnet_api.Dtos.Item;
using dotnet_api.Models;

namespace dotnet_api.Interfaces
{
    public interface IItemService
    {
        Task<IEnumerable<Item>> GetItems();
        Item CreateItem(CreateItemDto item);
        Item GetItemById(int id);
    }
}