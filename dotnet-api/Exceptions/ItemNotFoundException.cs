using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnet_api.Exceptions
{
    public class ItemNotFoundException : Exception
    {
        public ItemNotFoundException(int id) : base($"Item with ID {id} not found.") { }
    }
}