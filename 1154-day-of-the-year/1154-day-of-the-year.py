from datetime import datetime, timedelta

class Solution:
    def dayOfYear(self, date: str) -> int:
        d = datetime.strptime(date, "%Y-%m-%d")
        return (d - datetime(year=d.year - 1, month=12, day=31)).days