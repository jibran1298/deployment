import { Fragment } from 'react'
import '../../shared/style/main.css'
import LabelItem from './label-components/labelItem'

export default function Label({ title = '', labels = [] }) {
  return (
    <div className='labels-container'>
      <h1 className='section-title'>{title}</h1>
      <div className='labelitems-container'>
        {labels.map((label, index) => (
          <Fragment key={index}>
            <LabelItem text={label.name} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}
