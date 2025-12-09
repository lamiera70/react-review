
import './App.css'

const products = [
  { id: 1, name: 'Luca', email: 'luca@gmail.com'},
  { id: 2, name: 'Marco', email: 'marco@gmail.com'},
  { id: 3, name: 'Andrea', email: 'luca@gmail.com'}
];


export default function App() {

  
  return (
    <>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>nome: {product.name}</p>
            <p>email: {product.email}</p>
          </li>
        ))}
      </ul>
      
      
      <ul>
        {products.map(({ id, name, email }) => (
          <li key={id}>
            <p>nome: {name}</p>
            <p>email: {email}</p>
          </li>
        ))}
      </ul>

    </>
  )
}


