var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

var tagCounts = {};

tags.forEach(function(tag) {
    if (tagCounts[tag]) {
        tagCounts[tag]++;
    } else {
        tagCounts[tag] = 1;
    }
});

console.log(tagCounts);


var starbucks = {
    menu: {
        coffee: ["americano", "latte", "cappuccino", "mocha", "flatWhite"],
        tea: ["blackTea", "greenTea", "herbalTea"]
    },
    descriptions: {
        coffee: {
            americano: "Классический напиток, состоящий из одной порции кофе и одной порции воды.",
            latte: "Напиток на основе эспрессо с большим количеством молока и молочной пены.",
            cappuccino: "Эспрессо с небольшим количеством молока и плотной молочной пеной.",
            mocha: "Эспрессо с горячим шоколадом, молоком и венчиком взбитых сливок.",
            flatWhite: "Сильный кофе с молоком и тонким слоем микропенки."
        },
        tea: {
            blackTea: "Черный чай – насыщенный напиток с крепким вкусом и ароматом.",
            greenTea: "Зеленый чай – легкий и освежающий напиток с низким содержанием кофеина.",
            herbalTea: "Травяной чай – безкофейный напиток с разнообразными вкусами и свойствами."
        }
    },
    takeOrder: function() {
        var order = prompt(`Введите название напитка: \n${this.menu.coffee.join(', ')}\n${this.menu.tea.join(', ')}`);

        while (order !== null) {

            if (this.descriptions.coffee[order]) {
                alert(`Ваш заказ кофе: ${order}. ${this.descriptions.coffee[order]}\nВаш заказ принят.`);
            } else if (this.descriptions.tea[order]) {
                alert(`Ваш заказ чая: ${order}. ${this.descriptions.tea[order]}\nВаш заказ принят.`);
            } else {
                alert("Извините, такого напитка нет в меню. Пожалуйста, сделайте другой выбор.");
            }

            order = prompt(`Введите название напитка: \n${this.menu.coffee.join(', ')}\n${this.menu.tea.join(', ')}`);
        }
    }
};

starbucks.takeOrder();






