using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnet_api.Dtos.Item;
using dotnet_api.Interfaces;
using dotnet_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_api.Controllers
{
    [Route("api/items")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemService _itemService;
        
        public ItemController(IItemService itemService)
        {
            _itemService = itemService;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems()
        {
            var items = await _itemService.GetItems();
            return Ok(items);
        }

        [HttpPost]
        public IActionResult CreateItem([FromBody] CreateItemDto item)
        {
            if (!ModelState.IsValid)
            {
                // Return a BadRequest response with validation errors
                return BadRequest(ModelState);
            }

            try
            {
                var createdItem = _itemService.CreateItem(item);
                return CreatedAtAction(nameof(GetItemById), new { id = createdItem.Id }, createdItem);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult GetItemById(int id)
        {
            var item = _itemService.GetItemById(id);
            if (item == null)
            {
                return NotFound($"Item with ID {id} not found.");
            }
            return Ok(item);
        }
    }
}