"""
Test Perplexity API authentication
"""
from openai import OpenAI

api_key = "YOUR_PERPLEXITY_API_KEY"

try:
    client = OpenAI(
        api_key=api_key,
        base_url="https://api.perplexity.ai"
    )
    
    print("Testing Perplexity API...")
    response = client.chat.completions.create(
        model="llama-3.1-sonar-large-128k-online",
        messages=[
            {"role": "user", "content": "Say 'Hello, World!' if you can read this."}
        ],
        max_tokens=50
    )
    
    print("✅ Success!")
    print(f"Response: {response.choices[0].message.content}")
    
except Exception as e:
    print(f"❌ Error: {e}")
    print(f"\nFull error details:")
    import traceback
    traceback.print_exc()
