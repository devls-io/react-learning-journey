import { useState } from "react";
import Input from "./Input";
import Button from "./Button";


export default function List({className}){
    const [listItems, setListItems] = useState(()=> {
        return [
            {id: 1, text: "Item 1"},
            {id: 2, text: "Item 2"}
        ]
    })

    const [inputValue, setInputValue] = useState("")

    const listItemsElement = listItems.map(item=> 
        <li key={item.id}>{item.text}</li>
    )

    const handleDelete = ()=> {
        setListItems([])
    }

    const handleSubmit = (e)=> {
        e.preventDefault()

        if(inputValue){
            const nextId = listItems.length > 0
            // spread porque Math.max não aceita um array
            // Map para deixar só os IDs
             ? Math.max(...listItems.map(item=> item.id)) +1 : 1

             const newItem = {id: nextId, text: inputValue}

            setListItems(prevItens=> [...prevItens, newItem])
            setInputValue("")
        } else{
            alert("Insira um item na lista")
        }
    }


    return(
        <div className={className}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input type="text"
                 required placeholder="Inserir novo Item"
                 value={inputValue}
                 onChange={(e)=> setInputValue(e.target.value)} />

                <Button type="submit" variant="primary">Adicionar Item</Button>
            </form>

            <ul className="font-bold text-[20px]  m-auto p-2">{listItemsElement}</ul>
            <Button type="button" variant="danger" onClick={handleDelete}>Apagar Lista</Button>
        </div>
    )



}



