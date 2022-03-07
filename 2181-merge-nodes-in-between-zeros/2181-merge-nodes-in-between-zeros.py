class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        node = head.next
        new_head = None
        new_node = None
        new_node_value = 0
        
        while node:
            if node.val == 0 and new_node:
                new_node.next = ListNode(new_node_value)
                new_node = new_node.next
                new_node_value = 0
            elif node.val == 0 and new_node == None:
                new_node = ListNode(new_node_value)
                new_head = new_node
                new_node_value = 0
            else:
                new_node_value += node.val
            
            node = node.next
            
        return new_head
            