"""
ATHENA CORE

Main Brain Controller
"""

from personality import Personality
from memory import Memory
from planner import Planner
from tools import ToolManager


class Athena:

    def __init__(self):

        self.personality = Personality()
        self.memory = Memory()
        self.planner = Planner()
        self.tools = ToolManager()

    def greet(self):

        return self.personality.greeting()

    def think(self, user_input):

        return {

            "input": user_input,

            "plan": self.planner.plan(user_input),

            "memory": self.memory.recall(user_input)

        }
