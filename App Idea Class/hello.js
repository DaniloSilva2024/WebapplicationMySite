console.log("hello");

const { Application, CheckBox, Group, Scene, Separator, Text, VBox } = require('@jetbrains/ring-ui/components/form/form');

class CustomForm extends Application {
    constructor() {
        super();

        this.total = 0;

        this.fruit = new CheckBox('Fruit ($1000)');
        this.fruit.on('change', event => {
            this.total += event.target.checked ? 1000 : -1000;
            this.cost.setText(`$${this.total.toFixed(2)}`);
        });

        this.meat = new CheckBox('Meat ($1500)');
        this.meat.on('change', event => {
            this.total += event.target.checked ? 1500 : -1500;
            this.cost.setText(`$${this.total.toFixed(2)}`);
        });

        this.alcohol = new CheckBox('Alcohol ($3000)');
        this.alcohol.on('change', event => {
            this.total += event.target.checked ? 3000 : -3000;
            this.cost.setText(`$${this.total.toFixed(2)}`);
        });

        this.weapons = new CheckBox('Weapons ($5000)');
        this.weapons.on('change', event => {
            this.total += event.target.checked ? 5000 : -5000;
            this.cost.setText(`$${this.total.toFixed(2)}`);
        });

        this.drugs = new CheckBox('Drugs ($10000)');
        this.drugs.on('change', event => {
            this.total += event.target.checked ? 10000 : -10000;
            this.cost.setText(`$${this.total.toFixed(2)}`);
        });

        this.heading = new Text('Customs Form');
        this.heading.setFont('Arial', 'bold', 28);
        this.message = new Text('Are you carrying any of these items?');
        this.message.setFont('Times', 'italic', 14);
        this.message.setColor('darkgreen');

        this.head = new VBox(this.heading, this.message);
        this.head.setAlignment('center');

        this.options = new VBox(this.fruit, this.meat, this.alcohol, this.weapons, this.drugs);
        this.options.setAlignment('left');
        this.options.setSpacing(20);

        this.vb = new VBox();
        this.vb.setSpacing(10);
        this.vb.setAlignment('center');

        this.separator = new Separator();
        this.separator.setMaxWidth(290);

        this.cost = new Text('$0.00');
        this.label = new Text('Total Amount Owed');
        this.label.setFont('Arial', 'regular', 14);

        this.cost.setFont('Arial', 'italic', 18);
        this.cost.setColor('red');

        this.results = new VBox(this.label, this.cost);
        this.results.setAlignment('center');
        this.results.setSpacing(10);

        this.vb.setMargin(this.options, { top: 20, right: 20, bottom: 20, left: 20 });
        this.vb.setMargin(this.head, { top: 20, right: 20, bottom: 20, left: 20 });
        this.vb.setMargin(this.results, { top: 20, right: 20, bottom: 20, left: 20 });
        this.vb.add(this.head, this.separator, this.options, this.results);

        this.root = new Group(this.vb);
        this.scene = new Scene(this.root, 300, 500, 'white');
        this.stage.setTitle('Customs Form');
        this.stage.setScene(this.scene);
        this.stage.show();
    }
}

CustomForm.main();
