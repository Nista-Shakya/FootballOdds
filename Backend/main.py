from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel
import random
import uvicorn


class SearchItem(BaseModel):
    value0: str
    value1: str


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def index():
    return {"id":123}


@app.post("/submit")
async def find_personality(req: SearchItem):
    print(req)
    team1 = req.value0
    team2 = req.value1
    choice = random.randint(0, 1)
    winner = team1 if choice else team2
    return {"winner": winner}

if __name__ == "__main__":
    uvicorn.run("main:app")