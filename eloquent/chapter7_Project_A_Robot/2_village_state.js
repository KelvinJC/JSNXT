
/*
Let’s condense the village’s state down to the minimal set of values that define it. 

There’s the robot’s current location and the collection of undelivered
parcels, each of which has a current location and a destination address.

That’s it. 
And while we’re at it, 
let’s make it so that we don’t change this state  when the robot moves but 
rather compute a new state for the situation after the move.
*/

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels
            .map(
                p => {
                    if (p.place != this.place) return p;
                    return {place: destination, address: p.address}
                })
            .filter(
                p => p.place != p.address
            );
            return new VillageState(destination, parcels);
        }
    }
}


/*
The move method is where the action happens. 
It first checks whether there is a road going from the current place to the destination, 
and if not, it returns the old state since this is not a valid move.

Then it creates a new state with the destination as the robot’s new place. 
But it also needs to create a new set of parcels—parcels that the robot is carrying
(that are at the robot’s current place) need to be moved along to the new place.

And parcels that are addressed to the new place need to be delivered—that is,
they need to be removed from the set of undelivered parcels. 
The call to map takes care of the moving, 
and the call to filter does the delivering.

Parcel objects aren’t changed when they are moved but re-created. 
The move method gives us a new village state but leaves the old one entirely intact.
*/

let first = new VillageState(
    "Post Office", 
    [{place: "Post Office", address: "Alice's House"}]
    );

let next = first.move("Alice's House");

console.log(next.place);
console.log(next.parcels);

console.log(first.place);
console.log(first.parcels);

/*
A way to create a new state with some parcels. 
A static method (written here by directly adding a property to the constructor) 
is a good place to put that functionality. 
*/

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
}
