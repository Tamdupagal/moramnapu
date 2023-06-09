import cn from 'clsx'
import s from './ProductTag.module.css'

interface ProductTagProps {
  className?: string
  name: string
  price: string
  fontSize?: number
}

const ProductTag: React.FC<ProductTagProps> = ({
  name,
  price,
  className = '',
  fontSize = 32,
}) => {
  return (
    <div className="">
      <h3 className={s.name}>
        <span
          className=""
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: `${fontSize}px`,
          }}
        >
          {name}
        </span>
      </h3>
      <div className={s.price}>{price}</div>
    </div>
  )
}

export default ProductTag
