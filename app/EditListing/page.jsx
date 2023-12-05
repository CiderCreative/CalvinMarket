"use client"

import React, { useState } from 'react'
import { EditSidebarMenu } from "../../components/EditListing/index.js"
import { FileInput } from '../../components/EditListing/index.js';
import { ExitButton } from '../../components/Global/index.js';

const Page = ({params: {ItemId}}) => {
  const [files, setFiles] = useState([]);
  return (
    <div className="flex max-lg:flex-col items-center">
      <div className="lg:w-1/2">
        <ExitButton />
        <FileInput files={files} setFiles={setFiles} />
      </div>

      <div className="lg:w-1/2">
        <EditSidebarMenu files={files} setFiles={setFiles}/>
      </div>
    </div>
  )
}

export default Page