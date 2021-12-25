const mergeTwoLists = (list1, list2) => {
    let head = { next: undefined };
    
    const mergeNode = (cursor, nextList1, nextList2) => {
        if (!nextList1) {
            cursor.next = nextList2;
            return;
        }
        
        if (!nextList2) {
            cursor.next = nextList1;
            return;
        }
        
        if (nextList1.val < nextList2.val) {
            cursor.next = nextList1;
            mergeNode(cursor.next, nextList1.next, nextList2);
        } else {
            cursor.next = nextList2;
            mergeNode(cursor.next, nextList1, nextList2.next);
        }
    }
    
    mergeNode(head, list1, list2);
    
    return head.next;
};