function sum(a, b) {
    return a + b;
}

function isPalindrome(str) {
    let reverseStr = str.split("").reverse().join("").toLowerCase();
    if (str.toLowerCase() == reverseStr) {
        return true;
    };
    return false;
}

function isStrongPassword(password) {
    let hasLetter = /[A-Za-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$]/.test(password);

    return password.length >= 16 && hasLetter && hasNumber && hasSpecialChar;
}

function wordCount(str) {
    return str.trim().split(" ").length;
}

function lastWordLength(str) {
    let i = str.length - 1;
    while (i >= 0 && str[i] === ' ') {
        i--;
    }
    let word = 0;
    while (i >= 0 && str[i] !== ' ') {
        word++;
        i--;
    }
    return word;
}

function longestCommonPrefix(strs) {
    if (!strs || strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

function climbStairs(n) {
    // íà 0 èëè 1 øàã – ðîâíî 1 ñïîñîá
    if (n <= 1) return 1;

    // a=f(0), b=f(1)
    let a = 1, b = 1;

    for (let i = 2; i <= n; i++) {
        const c = a + b; // f(i) = f(i-1) + f(i-2)
        a = b;
        b = c;
    }
    return b; // f(n)
}

class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

function fromArray(arr) {
	let dummy = new ListNode(0);
	let tail = dummy;
	for (const v of arr) {
		tail.next = new ListNode(v);
		tail = tail.next;
	}
	return dummy.next;
}

function toArray(head) {
	const out = [];
	while (head) {
		out.push(head.val);
		head = head.next;
	}
	return out;
}

function deleteDuplicates(head) {
	let cur = head;
	while (cur && cur.next) {
		if (cur.val === cur.next.val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	return head;
}

class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

function treeFromArray(arr) {
	if (!arr || arr.length === 0 || arr[0] == null) return null;
	const root = new TreeNode(arr[0]);
	const q = [root];
	let i = 1;

	while (q.length && i < arr.length) {
		const node = q.shift();

		if (i < arr.length) {
			const v = arr[i++];
			if (v != null) {
				node.left = new TreeNode(v);
				q.push(node.left);
			}
		}
		
		if (i < arr.length) {
			const v = arr[i++];
			if (v != null) {
				node.right = new TreeNode(v);
				q.push(node.right);
			}
		}
	}
	return root;
}

function isSymmetric(root) {
	function isMirror(a, b) {
		if (!a && !b) return true;
		if (!a || !b) return false;
		return a.val === b.val && isMirror(a.left, b.right) && isMirror(a.right, b.left);
	}
	return isMirror(root?.left || null, root?.right || null);
}


module.exports = { sum, isPalindrome, isStrongPassword, wordCount, lastWordLength, longestCommonPrefix, climbStairs, fromArray, toArray, deleteDuplicates, treeFromArray, isSymmetric };
