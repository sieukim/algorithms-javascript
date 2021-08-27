function prefix(tree) {
    let answer = "";

    const recursion = tree => {
        if (!tree) return;
        answer += tree.value;
        recursion(tree.left);
        recursion(tree.right);
    };

    recursion(tree);

    return answer;
}

function infix(tree) {
    let answer = "";

    const recursion = tree => {
        if (!tree) return;
        recursion(tree.left);
        answer += tree.value;
        recursion(tree.right);
    };

    recursion(tree);

    return answer;
}

function postfix(tree) {
    let answer = "";

    const recursion = tree => {
        if (!tree) return;
        recursion(tree.left);
        recursion(tree.right);
        answer += tree.value;
    };

    recursion(tree);

    return answer;
}

class Tree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(node) {
        this.left = node;
    }

    insertRight(node) {
        this.right = node;
    }
}

const node = [0, ];

for (let i = 1; i <= 7; i++) {
    node[i] = new Tree(i);
}

node[1].insertLeft(node[2]);
node[1].insertRight(node[3]);

node[2].insertLeft(node[4]);
node[2].insertRight(node[5]);

node[3].insertLeft(node[6]);
node[3].insertRight(node[7]);

console.log(`전위순회 출력: ${prefix(node[1])}`);
console.log(`중위순회 출력: ${infix(node[1])}`);
console.log(`후위순회 출력: ${postfix(node[1])}`);