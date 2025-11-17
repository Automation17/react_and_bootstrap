const fruits = [
    {
        id: 1,
        name: "apple",
        calories: 95
    },
    {
        id: 2,
        name: "Banana",
        calories: 45
    },
    {
        id: 3,
        name: "Orange",
        calories: 105
    },
    {
        id: 4,
        name: "Coconut",
        calories: 37
    }
];

function List() {
    fruits.sort((a, b) => a.name.localeCompare(b.name));

    const filteredList = fruits.filter((fruit) => fruit.name.includes('a'));

    const myFruits = filteredList.map((fruit) =>
        <div className="card" key={fruit.id}>
            <p>{fruit.name}</p>
            <p>{fruit.calories}</p>
        </div> 
      
    );

    return (
        <div className="cards">
            {myFruits}
        </div>
    );
}

export default List;