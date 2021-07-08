import { viewProduct, editProduct } from "@/utils/helpers/DataTableActions.js"
export default class DatatableDirector {
    constructor(builder) {
        this.builder = builder
    }

    makeProducts() {

        const headers = [
            { text: 'code', value: 'code', align: "center" },
            { text: 'name', value: 'name', align: "center" },
            { text: 'qty', value: 'qty', align: "center" },
            { text: 'price', value: 'price', align: "center" },
            { text: 'price_range', value: 'price_range', align: "center" },
            { text: 'note', value: 'note', align: "center" },
            { text: 'actions', value: 'actions', align: "center" }
        ]
        return this.builder
            .setTitle('products')
            .setUrl('products')
            .setEdit(editProduct)
            .setViewable(true)
            .setView(viewProduct)
            .setTable('products')
            .setHeaders(headers)
            .build()
    }

    makeOrders() {

        const headers = [
            { text: 'code', value: 'code', align: "center" },
            { text: 'employee', value: 'employee', align: "center" },
            { text: 'total', value: 'total', align: "center" },
            { text: 'created_at', value: 'created_at', align: "center" }
        ]
        return this.builder
            .setTitle('orders')
            .setUrl('orders')
            .setEdit(editProduct)
            .setViewable(true)
            .setView(viewProduct)
            .setTable('orders')
            .setHeaders(headers)
            .build()
    }

};