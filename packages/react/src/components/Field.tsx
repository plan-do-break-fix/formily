import React from 'react'
import { useField, useForm } from '../hooks'
import { MutableField } from './MutableField'
import { IReactComponent } from '../types'

export const Field = <D extends IReactComponent, C extends IReactComponent>(
  props: React.PropsWithChildren<FormilyCore.ICreateFieldProps<D, C>>
) => {
  const form = useForm()
  const base = useField()
  const field = form.createField({ basePath: base?.path, ...props })
  return <MutableField field={field}>{props.children}</MutableField>
}