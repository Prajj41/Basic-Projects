import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";

export default function FeedbackForm() {
  const [showForm, setShowForm] = useState(false);
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    rating: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    alert("Thank you for your feedback!");
    setFeedback({ name: "", email: "", rating: "", comments: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="flex items-center gap-2">
        <span>Show Feedback Form</span>
        <Switch checked={showForm} onCheckedChange={setShowForm} />
      </div>
      {showForm && (
        <Card className="w-full max-w-md mt-4">
          <CardContent className="p-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={feedback.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={feedback.email}
                onChange={handleChange}
                required
              />
              <Input
                type="number"
                name="rating"
                placeholder="Rating (1-5)"
                min="1"
                max="5"
                value={feedback.rating}
                onChange={handleChange}
                required
              />
              <Textarea
                name="comments"
                placeholder="Your Comments"
                value={feedback.comments}
                onChange={handleChange}
              />
              <Button type="submit">Submit Feedback</Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
