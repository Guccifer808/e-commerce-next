'use client'

import React from 'react'

import classes from './index.module.scss'
import { useFilter } from '../../../_providers/Filter'
import { Category } from '../../../../payload/payload-types'
import CustomCheckbox from '../../../_components/CustomCheckbox'
import { HR } from '../../../_components/HR'
import CustomRadioButton from '../../../_components/CustomRadioButton'

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter()

  const handleCategories = (categoryId: string) => {
    if (categoryFilters.includes(categoryId)) {
      const updated = categoryFilters.filter(id => id !== categoryId)
      setCategoryFilters(updated)
    } else {
      setCategoryFilters([...categoryFilters, categoryId])
    }
  }
  const handleSorting = (value: string) => {
    setSort(value)
  }
  return (
    <div className={classes.filters}>
      <div>
        <h6 className={classes.title}>Categories</h6>
        <div className={classes.categories}>
          {categories.map(category => {
            const isSelected = categoryFilters.includes(category.id)

            return (
              <CustomCheckbox
                key={category.id}
                label={category.title}
                value={category.id}
                isSelected={isSelected}
                onClickHandler={handleCategories}
              />
            )
          })}
        </div>
        <HR className={classes.hr} />
        <h6 className={classes.title}>Sort by</h6>
        <div className={classes.categories}>
          <CustomRadioButton
            label="Latest"
            value="-createdAt"
            isSelected={sort === '-createdAt'}
            onRadioChange={handleSorting}
            groupName="sort"
          />
          <CustomRadioButton
            label="Oldest"
            value="createdAt"
            isSelected={sort === 'createdAt'}
            onRadioChange={handleSorting}
            groupName="sort"
          />
        </div>
      </div>
    </div>
  )
}

export default Filters
