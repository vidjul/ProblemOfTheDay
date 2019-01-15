class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

const serialize = (node) => {
    if (!node) {
        return null;
    }
    let result = `["${node.val}"`;
    const left_val = serialize(node.left);
    const right_val = serialize(node.right)
    if (left_val) {
        result += `, ${left_val}`;
    }
    if (right_val) {
        result += `, ${right_val}`;
    }
    result += ']';
    return result;
};

const deserialize = (nodeArray) => {

}

// console.log(deserialize(JSON.parse(serialize(node))));