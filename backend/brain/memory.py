class Memory:

    def __init__(self):

        self.notes = []

    def remember(self, item):

        self.notes.append(item)

    def recall(self, query):

        return self.notes
