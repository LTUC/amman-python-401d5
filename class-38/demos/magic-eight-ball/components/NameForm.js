import React, { useState } from 'react'

export default function NameForm({updateName}) {

    const handleForm = event => {
        event.preventDefault()
        updateName(event.target.name.value)
    }
    return (<form className="flex w-1/2 p-2 mx-auto my-4 bg-gray-200" onSubmit={handleForm}>
        <input name="name" className="flex-auto pl-1" />
        <button className="px-2 py-1 bg-gray-500 text-gray-50">Enter your name</button>
    </form>)

}