import React from 'react'

export const CheckBox = React.forwardRef(({indeterminate,...rest},ref) => {
    const defaultRef=React.useRef()
    const resolveref=ref||defaultRef

    React.useEffect(()=>{
        resolveref.current.indeterminate=indeterminate
    },[resolveref,indeterminate])
  return (
    <>
    <input type='Checkbox' ref={resolveref} {...rest} />
    </>
  )
})
