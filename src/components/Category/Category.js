import React from 'react'
import { ItemWrapper, CategoryText } from './Category.styles'

const Category = ({categories,onCategoryChange,selectedCategory}) => {
    return (
        <div>
           {categories?.map((category,i) => (
                <ItemWrapper
                    key={`category${i}`}
                    onChange={(event) => {
                        onCategoryChange&&onCategoryChange(category,event)
                    }}
                >
                    <input
                    type='radio'
                    name='category'
                    value={category}
                    defaultChecked={category==='Hepsi'}
                    />
                    <CategoryText>{category}</CategoryText>
                </ItemWrapper>
           ))}
        </div>
    )
}

export default Category
