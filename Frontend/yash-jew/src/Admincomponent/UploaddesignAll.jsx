import React from 'react'
import GoldProductList from './GoldProductList'
import SilverProductList from './SilverProductList'
import GPAdminList from '../Admin/GPAdminList'
import AdminNavbar from '../AdminNavbar/AdminNavbar'

const UploaddesignAll = () => {
  return (
    <div>
<AdminNavbar/>
<div>
<GoldProductList/>
</div>

<div>
<SilverProductList/>
</div>

<div>
<GPAdminList/>
</div>
    </div>
  )
}

export default UploaddesignAll