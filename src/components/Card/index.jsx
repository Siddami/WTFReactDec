import clsx from 'clsx';
import './Card.css'

const Card = ({classname, children, ...rest}) => {
  return (
    <article className={clsx('card', classname, `card--${rest.display}`, `card--${rest.outlined}`)} {...rest}>
      {children}
    </article>
  )
}

export default Card;

export { CardHeader } from './CardHeader';
export { CardTitle } from './CardHeader';
export { CardDescription } from './CardHeader';
export { CardContent } from './CardContent';
export { CardFooter } from './CardFooter';