function MemberFactory() {
    this.createMember = function (name, type) {
        let member;
        switch (type) {
            case 'standard':
                member = new StandardMembership(name);
                break;
            case 'silver':
                member = new SilverMembership(name);
                break;
            case 'gold':
                member = new GoldMembership(name);
                break;
        }
        member.type = type;
        member.define = function () {
            console.log(`${this.name} (${this.type}: ${this.cost})`);
        }
        return member;
    }
}

const StandardMembership = function (name) {
    this.name = name;
    this.cost = 5;
};
const SilverMembership = function (name) {
    this.name = name;
    this.cost = 10;
};
const GoldMembership = function (name) {
    this.name = name;
    this.cost = 15;
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Angga', 'standard'));
members.push(factory.createMember('Ari', 'silver'));
members.push(factory.createMember('Wijaya', 'gold'));

members.forEach(function (member) {
    member.define();
});
