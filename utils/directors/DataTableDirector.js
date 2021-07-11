import { viewProduct, editProduct } from "@/utils/helpers/DataTableActions.js"
export default class DatatableDirector {
    constructor(builder) {
        this.builder = builder
    }

    makeProducts() {

        const headers = [
            { text: 'columns.code', value: 'code', align: "center" },
            { text: 'columns.name', value: 'name', align: "center" },
            { text: 'columns.qty', value: 'qty', align: "center" },
            { text: 'columns.price', value: 'price', align: "center" },
            { text: 'columns.price_range', value: 'price_range', align: "center" },
            { text: 'columns.note', value: 'note', align: "center" },
            { text: 'columns.actions', value: 'actions', align: "center" }
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
            { text: 'columns.code', value: 'code', align: "center" },
            { text: 'columns.employee', value: 'employee', align: "center" },
            { text: 'columns.total', value: 'total', align: "center" },
            { text: 'columns.created_at', value: 'created_at', align: "center" }
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