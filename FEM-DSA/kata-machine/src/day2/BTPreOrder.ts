
function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // When there is no current node, return the updated path
    if(!curr){
        return path
    }

    // recurse
    // pre
    path.push(curr.value)
    // recurse
    walk(curr.left, path)
    walk(curr.right, path)
    // post

    return path
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])
}