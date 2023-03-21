import requests
import string

alpha = string.ascii_letters
while True:
    for c in alpha:
        requests.put("https://server-demo-3eh0.onrender.com/message/update", data={"message": c})
        print(f"😈 Sending over: {c}")
