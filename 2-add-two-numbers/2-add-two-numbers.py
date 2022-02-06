class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        def make_number(node):
            n = ""
            
            while node:
                n = str(node.val) + n
                node = node.next
            
            return int(n)
        
        n1 = make_number(l1)
        n2 = make_number(l2)
        num_list = list(str(n1 + n2))
        num_length = len(num_list)
        last_node = ListNode(num_list[0])
        
        def make_link(node, index):
            if index == num_length:
                return node
            
            next_node = ListNode(num_list[index], node)
            return make_link(next_node, index + 1)
        
        first_node = make_link(last_node, 1)
        
        return first_node