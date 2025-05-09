import { useState } from "react";

function App5(){
    const menuData = [
        { id: 1, title: 'Buttermilk Pancakes', category: 'breakfast', price: '$15.99', img: `https://media.istockphoto.com/id/1138888441/photo/good-morning-continental-breakfast-on-ristic-wooden-background.jpg?s=2048x2048&w=is&k=20&c=I03fV6VMC-3ZRcj44bKkyHTZ8tmp_plueG5ARaKMMsI=`, desc: 'Fluffy pancakes with syrup and butter.' },
        { id: 2, title: 'Diner Double', category: 'lunch', price: '$13.99', img: `https://media.istockphoto.com/id/1138888441/photo/good-morning-continental-breakfast-on-ristic-wooden-background.jpg?s=2048x2048&w=is&k=20&c=I03fV6VMC-3ZRcj44bKkyHTZ8tmp_plueG5ARaKMMsI=`, desc: 'Double beef patty with cheese and fries.' },
        { id: 3, title: 'Godzilla Milkshake', category: 'shakes', price: '$6.99', img: `https://media.istockphoto.com/id/1138888441/photo/good-morning-continental-breakfast-on-ristic-wooden-background.jpg?s=2048x2048&w=is&k=20&c=I03fV6VMC-3ZRcj44bKkyHTZ8tmp_plueG5ARaKMMsI=`, desc: 'A monstrous blend of chocolate and vanilla.' },
        { id: 4, title: 'Avocado Toast', category: 'breakfast', price: '$10.49', img: `https://media.istockphoto.com/id/1138888441/photo/good-morning-continental-breakfast-on-ristic-wooden-background.jpg?s=2048x2048&w=is&k=20&c=I03fV6VMC-3ZRcj44bKkyHTZ8tmp_plueG5ARaKMMsI=`, desc: 'Crispy toast topped with avocado and poached egg.' },
        { id: 5, title: 'BBQ Bacon Burger', category: 'lunch', price: '$12.75', img: `https://media.istockphoto.com/id/1138888441/photo/good-morning-continental-breakfast-on-ristic-wooden-background.jpg?s=2048x2048&w=is&k=20&c=I03fV6VMC-3ZRcj44bKkyHTZ8tmp_plueG5ARaKMMsI=`, desc: 'Smoky BBQ burger with bacon and cheddar.' },
        { id: 6, title: 'Strawberry Smoothie', category: 'shakes', price: '$5.50', img: `https://media.istockphoto.com/id/1138888441/photo/good-morning-continental-breakfast-on-ristic-wooden-background.jpg?s=2048x2048&w=is&k=20&c=I03fV6VMC-3ZRcj44bKkyHTZ8tmp_plueG5ARaKMMsI=`, desc: 'Fresh strawberry smoothie with a hint of banana.' },
        { id: 7, title: 'French Omelette', category: 'breakfast', price: '$9.99', img: `https://media.istockphoto.com/id/1138888441/photo/good-morning-continental-breakfast-on-ristic-wooden-background.jpg?s=2048x2048&w=is&k=20&c=I03fV6VMC-3ZRcj44bKkyHTZ8tmp_plueG5ARaKMMsI=`, desc: 'Classic French omelette with herbs and cheese.' },
        { id: 8, title: 'Grilled Chicken Wrap', category: 'lunch', price: '$11.20', img: `https://media.istockphoto.com/id/1138888441/photo/good-morning-continental-breakfast-on-ristic-wooden-background.jpg?s=2048x2048&w=is&k=20&c=I03fV6VMC-3ZRcj44bKkyHTZ8tmp_plueG5ARaKMMsI=`, desc: 'Healthy wrap with grilled chicken and veggies.' },
        { id: 9, title: 'Cookies and Cream Shake', category: 'shakes', price: '$7.25', img: `https://media.istockphoto.com/id/1138888441/photo/good-morning-continental-breakfast-on-ristic-wooden-background.jpg?s=2048x2048&w=is&k=20&c=I03fV6VMC-3ZRcj44bKkyHTZ8tmp_plueG5ARaKMMsI=`, desc: 'Creamy shake loaded with cookies.' },
      ];
      const [category,SetCategory]=useState("all")

      const filteredmenu= category=="all"? menuData : menuData.filter((item)=>item.category==category)

      return(
        <main id='main'>
                <div>
                <button onClick={()=>SetCategory('all')}>All</button>
                <button onClick={()=>SetCategory('breakfast')}>Breakfast</button>
                <button onClick={()=>SetCategory('shakes')}>Breakfast</button>
                <button onClick={()=>SetCategory('lunch')}>lunch</button>
            </div>
        <section>
           { filteredmenu.map((i)=> {
                return (
                    <div key={i.id}>
                        <img src={i.img} alt={i.title}  height="20%"  width="20%"/>
                        <h4>{i.title}</h4>
                        <p>{i.desc}</p>
                        <span>{i.price}</span>
                    </div>
                )
            })}
        </section>
        </main>
      )
}
export default App5