var resturant = {
    name: "Chat Current",
    menu: ["Tikki","Chat","GolGappe","Dahi Bahlla"],
    rating: [5,3,3.5,2.1],
    Adding: function (foodyouwanttoadd) {
        this.menu = this.menu.push(foodyouwanttoadd);
        return;
    },
    remove: function (a,b) {
        this.menu = this.menu.splice(a,b);
        return;
    },
};
console.log(resturant.Adding["Abc"]);
console.log(resturant);

