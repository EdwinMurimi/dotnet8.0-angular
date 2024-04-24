using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace dotnet_api.Dtos.Item
{
    public class CreateItemDto
    {
        [Required]
        [MinLength(3, ErrorMessage = "Name cannot be less than 3 characters")]
        [MaxLength(100, ErrorMessage = "Name cannot exceed 100 characters")]
        public string Name { get; set; } = string.Empty;
        [Required]
        [MaxLength(255, ErrorMessage = "Description cannot exceed 255 characters")]
        public string Description { get; set; } = string.Empty;
        [Required]
        [Range(0.01, double.MaxValue, ErrorMessage = "Price must be greater than zero")]
        public decimal Price { get; set; }
        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Quantity must be at least 1")]
        public int Quantity { get; set; }
        [Required]
        public string Category { get; set; } = string.Empty;
        [Required]
        public string ImageUrl { get; set; } = string.Empty;
    }
}