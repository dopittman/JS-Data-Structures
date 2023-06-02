
// InOrder is a Depth-First-search
// InOrder goes left as deep as possible first, and visits that value, then goes right once, then as left as possible again, etc.


function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // When there is no current node, return the updated path
    if(!curr){
        return path
    }

    // recurse
    // pre
    // recurse
    walk(curr.left, path)
    path.push(curr.value)
    walk(curr.right, path)
    // post

    return path
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])
}