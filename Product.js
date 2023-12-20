export default function Product(){
  //const Products =["Laptop", "Phone", "Modem","Computer"]
  const Products =[
    {id:1, name:"Laptop", price: 500},
    {id:2, name: "Modem", price: 50},
    {id:3, name: "Phone", price: 200}
     {id:4, name:"Laptop",price:900}
];
  const fruits =["Apple", "Mango", "Banana"];
  /*

 const ProductList = products.map((Product) => (
   <h3 key={ Product.id}>
    {Product.name}: ${Product.price}
    </h3>
   ));
  */
const fruitsList = fruits.map((fruit, index)=> console.log(index));
   return <div>{ fruitsList}</div>;
}
