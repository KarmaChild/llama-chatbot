from flask import Flask, request, jsonify
from langchain.llms import LlamaCpp
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

# Load the LlamaCpp language model
llm = LlamaCpp(
    model_path="models/llama-2-7b-chat.Q5_K_M.gguf",
    n_gpu_layers=40,
    n_batch=512,
    verbose=False
)

# Define the prompt template
template = """
Question: {question}

Answer:
"""
prompt = PromptTemplate(template=template, input_variables=["question"])

# Create an LLMChain instance
llm_chain = LLMChain(prompt=prompt, llm=llm)

app = Flask(__name__)

@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    question = data.get('question', '')
    answer = llm_chain.run(question)
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(debug=True)
