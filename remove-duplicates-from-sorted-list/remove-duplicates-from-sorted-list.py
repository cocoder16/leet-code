class Solution:
    def findDiffrentValue(self, cursor) -> Optional[ListNode]:
        if cursor.next == None:
            return None
        
        if cursor.val == cursor.next.val:
            return self.findDiffrentValue(cursor.next)
        
        return cursor.next
        
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cursor = head
        
        while True:
            if cursor == None or cursor.next == None:
                break
            
            next_node = self.findDiffrentValue(cursor)
            cursor.next = next_node
                
            cursor = cursor.next
        
        return head