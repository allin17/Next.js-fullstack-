import Order from "../../../models/Order";

const handler = async (req, res) => {
    const { method, query:{id} } = req

    if(method === "GET") {
        try {
            const order = await Order.findById(id)
            res.status(200).json(order)
        }catch (e) {
            res.status(500).json(e)
        }
    }

    if(method === "PUT") {

    }

    if(method === "DELETE") {

    }
}

export default handler