from pydantic import BaseModel, ConfigDict


class GreetingView(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    message: str
