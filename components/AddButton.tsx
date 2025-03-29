'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import { ResponsiveDialog } from './ResponsiveDialog'
import FormReuniao from './forms/FormReuniao'

interface DialogProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Dialog(props: DialogProps) {
    return (
        <>
        <ResponsiveDialog title='Titulo teste' isOpen={props.isOpen} setIsOpen={props.setIsOpen} >
            <FormReuniao/>
        </ResponsiveDialog>
        </>
    )
}

const AddButton = () => {
  const [isDialogOpen, setDialogOpen] = useState(false)

  function handleDialogOpen() {
    setDialogOpen(true)
    console.log('DEBUG: Open dialog')
  }

  return (
    <>
    <Button className='w-40 mb-5 cursor-pointer' onClick={handleDialogOpen}>
        <Plus/> Adicionar Evento
    </Button>

    <Dialog isOpen={isDialogOpen} setIsOpen={setDialogOpen} />
    </>
  )
}

export default AddButton
