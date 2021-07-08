
export default class DatatableDirector {
    constructor(builder){
        this.builder = builder
    }
    
    makeProducts() {
        const  filters  =  [
            languageFilter(),
            categoryFilter(),
            ageFilter(),
            imageFilter()
        ]
        const  headers  =  [
            { text: 'id', value: 'id' , align: "center" },
            { text: 'isbn', value: 'isbn' , align: "center" },
            { text: 'title', value: 'title' , align: "center" },
            { text: 'price', value: 'price' , align: "center" },
            { text: 'thumbnail', value: 'thumbnail' , align: "center" },
            { text: 'actions', value: 'actions' , align: "center"},
        ]
        return this.builder
                .setTitle('products')
                .setUrl('products')
                .setCreateLoading(false)
                .setCreate(createDoc)
                .setEdit(editProduct)
                .setViewable(true)
                .setView(viewProduct)
                .setTable('products')
                .setHeaders(headers)
                .setFilters(filters)
                .build()
    }

};