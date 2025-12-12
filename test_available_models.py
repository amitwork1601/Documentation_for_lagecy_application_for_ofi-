"""
Test which Claude models are available with the API key
"""
from anthropic import Anthropic

api_key = "YOUR_CLAUDE_API_KEY"

# List of Claude models to test (from newest to oldest)
models_to_test = [
    "claude-sonnet-4.5",           # Claude Sonnet 4.5 (if available)
    "claude-sonnet-4-20250514",    # Claude Sonnet 4 (if available)
    "claude-3-5-sonnet-20241022",  # Latest Claude 3.5 Sonnet
    "claude-3-5-sonnet-20240620",  # Previous version
    "claude-3-opus-20240229",      # Claude 3 Opus
    "claude-3-sonnet-20240229",    # Claude 3 Sonnet
    "claude-3-haiku-20240307",     # Claude 3 Haiku
]

client = Anthropic(api_key=api_key)

print("Testing Claude models with your API key...\n")

for model in models_to_test:
    try:
        response = client.messages.create(
            model=model,
            max_tokens=10,
            messages=[{"role": "user", "content": "Hi"}]
        )
        print(f"SUCCESS: {model}")
        print(f"  Response: {response.content[0].text}")
        print(f"  This is the BEST model available!\n")
        break  # Stop at first working model
    except Exception as e:
        error_msg = str(e)
        if "404" in error_msg or "not_found" in error_msg:
            print(f"NOT AVAILABLE: {model}")
        else:
            print(f"ERROR: {model} - {error_msg}")

print("\nRecommendation: Use the first successful model above.")
