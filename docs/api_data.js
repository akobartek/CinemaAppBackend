define({ "api": [
  {
    "type": "post",
    "url": "/api/orders/",
    "title": "Add new order to database",
    "name": "AddOrder",
    "group": "Orders",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "movieId",
            "description": "<p>Movie that order was made for.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Date of film show.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>Time of film show.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "seats",
            "description": "<p>Seats that was reserved with this order.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ticketType",
            "description": "<p>Type of tickets reserved.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Order",
            "description": "<p>Order that was saved.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"_id\": \"3ab30d7f1b26580016067995\",\n     \"movieId\": \"343611\",\n     \"date\": \"12.05.2018\",\n     \"time\": \"20:00\",\n     \"seats\": [\"1-1\", \"1-2\", \"1-3\"],\n     \"ticketType\": [\"0-3\", \"1-2\"],\n     \"orderDate\": \"2019-04-14T12:44:36.963Z\"\n     \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParams",
            "description": "<p>Invalid params sent.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Orders"
  },
  {
    "type": "delete",
    "url": "/api/orders/:id",
    "title": "Delete order from database",
    "name": "DeleteOrder",
    "group": "Orders",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>Order id that the user wants to delete.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Order",
            "description": "<p>Order that has been deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"_id\": \"3ab30d7f1b26580016067995\",\n     \"movieId\": \"343611\",\n     \"date\": \"12.05.2018\",\n     \"time\": \"20:00\",\n     \"seats\": [\"1-1\", \"1-2\", \"1-3\"],\n     \"ticketType\": [\"0-3\", \"1-2\"],\n     \"orderDate\": \"2019-04-14T12:44:36.963Z\"\n     \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OrderNotFound",
            "description": "<p>The order with the given ID was not found!</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/api/orders/:id",
    "title": "Get order from database",
    "name": "GetOrder",
    "group": "Orders",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Previously generated JWT.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>Order id that the user wants to get.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Order",
            "description": "<p>Order that the user want.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"_id\": \"3ab30d7f1b26580016067995\",\n     \"movieId\": \"343611\",\n     \"date\": \"12.05.2018\",\n     \"time\": \"20:00\",\n     \"seats\": [\"1-1\", \"1-2\", \"1-3\"],\n     \"ticketType\": [\"0-3\", \"1-2\"],\n     \"orderDate\": \"2019-04-14T12:44:36.963Z\"\n     \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OrderNotFound",
            "description": "<p>The order with the given ID was not found!</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/api/orders/",
    "title": "Get orders from database",
    "name": "GetOrders",
    "group": "Orders",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Orders",
            "description": "<p>Array of orders.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"_id\": \"3ab30d7f1b26580016067995\",\n         \"movieId\": \"343611\",\n         \"date\": \"12.05.2018\",\n         \"time\": \"20:00\",\n         \"seats\": [\"1-1\", \"1-2\", \"1-3\"],\n         \"ticketType\": [\"0-3\", \"1-2\"],\n         \"orderDate\": \"2019-04-14T12:44:36.963Z\"\n         \"__v\": 0\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Orders"
  }
] });
