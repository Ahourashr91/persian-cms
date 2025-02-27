import React, { useState } from 'react'

export default function AddNewProduct({ url }) {
  const [nameValue, setNameValue] = useState("")
  const [mojodiValue, setMojodiValue] = useState(null)
  const [mahbobiatValue, setMahbobiatValue] = useState(null)
  const [rangsValue, setRangsValue] = useState(null)
  const [priceValue, setPriceValue] = useState(null)
  const [adressValue, setAdressValue] = useState("")
  const [saleValue, setSaleValue] = useState(null)
  const [cIdValue, setCIdValue] = useState(null)
  const [descValue, setDescValue] = useState("")
  const [urlValue, setUrlValue] = useState("")

  const [products, setProducts] = useState([])

  useState(() => {
    fetch(`http://localhost:3000/products`)
      .then(res => res.json())
      .then(datas => setProducts(datas))
  }, [products])

  const addNewProduct = () => {
    const newProduct = {
      id: products.length + 1,
      title: nameValue,
      count: mojodiValue,
      colors: rangsValue,
      price: priceValue,
      img: adressValue,
      sale: saleValue,
      category: cIdValue,
      productDesc: descValue,
      url: urlValue
    }

    fetch(`http://localhost:3000/products`, {
      method: "POST",
      body: JSON.stringify(newProduct)
    }).then(res => console.log(res))
  }

  return (
    <>
      <p className='bold'>اضافه کردن محصول جدید</p>
      <div className="anpp">
        <div>
          <div>
            <input type="text" onChange={(e) => setNameValue(e.target.value)} value={nameValue} className='newProdInput' placeholder='اسم محصول را بنویسید' />
          </div>
          <div>
            <input type="number" onChange={(e) => setMojodiValue(e.target.value)} value={mojodiValue} className='newProdInput' placeholder='موجودی محصول را بنویسید' />
          </div>
          <div>
            <input type="number" onChange={(e) => setMahbobiatValue(e.target.value)} value={mahbobiatValue} className='newProdInput' placeholder='میزان محبوبیت محصول را بنویسید' />
          </div>
          <div>
            <input type="number" onChange={(e) => setRangsValue(e.target.value)} value={rangsValue} className='newProdInput' placeholder='تعداد رنگ بندی محصول را بنویسید' />
          </div>
          <div>
            <input type="text" onChange={(e) => setCIdValue(e.target.value)} value={cIdValue} className='newProdInput' placeholder='دسته بندی محصول را بنویسید' />
          </div>
        </div>
        <div>
          <div>
            <input type="number" onChange={(e) => setPriceValue(e.target.value)} value={priceValue} style={{ marginRight: 30 }} className='newProdInput' placeholder='قیمت محصول را بنویسید' />
          </div>
          <div>
            <input type="text" onChange={(e) => setAdressValue(e.target.value)} value={adressValue} style={{ marginRight: 30 }} className='newProdInput' placeholder='آدرس عکس محصول را بنویسید' />
          </div>
          <div>
            <input type="number" onChange={(e) => setSaleValue(e.target.value)} value={saleValue} style={{ marginRight: 30 }} className='newProdInput' placeholder='میزان فروش محصول را بنویسید' />
          </div>
          <div>
            <input type="text" onChange={(e) => setDescValue(e.target.value)} value={descValue} style={{ marginRight: 30 }} className='newProdInput' placeholder='توضیحات محصول را بنویسید' />
          </div>
          <div>
            <input type="text" onChange={(e) => setUrlValue(e.target.value)} value={urlValue} style={{ marginRight: 30 }} className='newProdInput' placeholder='یو آر ال محصول را بنویسید' />
          </div>
          <button className='submitProducts' onClick={addNewProduct}>ثبت محصول</button>
        </div>
      </div>
    </>
  )
}
