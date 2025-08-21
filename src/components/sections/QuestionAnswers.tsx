// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const QuestionAnswers = () => {
//     // Questions list
//     const questions = [
//         "Could you provide a brief summary of your business, its solutions, and its unique selling proposition (USP)?",
//         "Who are your main competitors?",
//         "What major locations or regions does your business target?"
//     ];

//     const navigate = useNavigate();
//     const [auditFormData, setAuditFormData] = useState(null);

//     // Store answers
//     const [answers, setAnswers] = useState(Array(questions.length).fill(""));

//     // Load audit form data from localStorage
//     useEffect(() => {
//         const storedData = localStorage.getItem('auditFormData');
//         if (storedData) {
//             setAuditFormData(JSON.parse(storedData));
//         }
//     }, []);

//     // Handle input change
//     const handleChange = (index, value) => {
//         const newAnswers = [...answers];
//         newAnswers[index] = value;
//         setAnswers(newAnswers);
//     };

//     // Submit all answers
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (answers.some((ans) => ans.trim() === "")) {
//             alert("Please answer all questions before submitting.");
//             return;
//         }

//         if (!auditFormData) {
//             alert("Audit form data not found. Please go back and fill the audit form first.");
//             return;
//         }

//         try {
//             // Prepare data to send
//             const submitData = {
//                 url: auditFormData.url,
//                 email: auditFormData.email,
//                 companyName: auditFormData.companyName,
//                 questionAnswers: answers
//             };

//             // Send to API
//             const response = await axios.post("http://localhost:5000/api/v1/submit-form", submitData, {
//                 headers: { "Content-Type": "application/json" }
//             });

//             console.log("Data submitted successfully:", response.data);

//             // Clear localStorage
//             localStorage.removeItem('auditFormData');

//             // Navigate to loading page
//             navigate("/loading");

//         } catch (error) {
//             console.error("Error submitting form:", error);
//             alert("Error submitting form. Please try again.");
//         }
//     };

//     const handleSkip = () => {
//         navigate("/loading");
//     };

//     return (
//         <div className="bg-white min-h-screen flex flex-col justify-center items-center px-6 py-10">
//             <div className="relative w-full max-w-2xl mb-8">
//                 <h2 className="text-2xl font-semibold text-gray-800 text-center">
//                     Answer the Questions
//                 </h2>
//                 <Button
//                     type="button"
//                     onClick={handleSkip}
//                     variant="outline"
//                     className="absolute right-0 top-0 text-gray-600 border border-gray-300 px-4 py-2 rounded-lg "

//                 >
//                     Skip
//                 </Button>
//             </div>
//             <form
//                 onSubmit={handleSubmit}
//                 className="flex flex-col w-full max-w-2xl space-y-6"
//             >
//                 {questions.map((question, index) => (
//                     <div key={index} className="flex flex-col">
//                         <p className="text-lg font-medium text-gray-700 mb-2">
//                             Q{index + 1}: {question}
//                         </p>
//                         <Input
//                             type="text"
//                             placeholder="Enter your answer..."
//                             value={answers[index]}
//                             onChange={(e) => handleChange(index, e.target.value)}
//                             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             required
//                         />
//                     </div>
//                 ))}
//                 <Button
//                     type="submit"
//                     className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:opacity-90 transition-opacity"
//                     size="lg"
//                 >
//                     Submit
//                 </Button>
//             </form>
//         </div>
//     );
// }

// export default QuestionAnswers







import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
    businessSummary: z.string().min(10, "Please provide at least 10 characters"),
    competitors: z.string().min(5, "Please provide at least 5 characters"),
    targetLocations: z.string().min(5, "Please provide at least 5 characters"),
});

const QuestionsAnswers = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            businessSummary: "",
            competitors: "",
            targetLocations: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
        toast.success("Thank you for your responses! We'll be in touch soon.");
        navigate("/thankyou");
        setIsSubmitted(true);
    };

    const questions = [
        {
            id: "businessSummary",
            question: "Could you provide a brief summary of your business, its solutions, and its unique selling proposition (USP)?",
            placeholder: "Describe your business, the solutions you offer, and what makes you unique in the market..."
        },
        {
            id: "competitors",
            question: "Who are your main competitors?",
            placeholder: "List your main competitors and how you differentiate from them..."
        },
        {
            id: "targetLocations",
            question: "What major locations or regions does your business target?",
            placeholder: "Specify the geographic markets, regions, or locations you serve or plan to serve..."
        }
    ];

    if (isSubmitted) {
        return (
            <div className="min-h-screen">
                <Header />
                <main className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-2xl mx-auto text-center">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl text-primary">Thank You!</CardTitle>
                                    <CardDescription>
                                        We've received your responses and will be in touch soon to discuss how we can help your business grow.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button onClick={() => window.location.href = "/"} className="mt-4">
                                        Return to Home
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Header />
            <main className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold mb-4">Tell Us More About Your Business</h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Help us understand your business better so we can provide the most relevant solutions for your needs.
                            </p>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>Business Information</CardTitle>
                                <CardDescription>
                                    Please answer the following questions to help us tailor our services to your specific needs.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                        {questions.map((q, index) => (
                                            <FormField
                                                key={q.id}
                                                control={form.control}
                                                name={q.id as keyof z.infer<typeof formSchema>}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-base font-semibold">
                                                            {index + 1}. {q.question}
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder={q.placeholder}
                                                                className="min-h-[120px] resize-none"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        ))}

                                        {/* <div className="flex justify-center pt-6">
                      <Button type="submit" size="lg" className="px-8">
                        Submit 
                      </Button>
                    </div> */}
                                        <div className="flex justify-center gap-4 pt-6">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="lg"
                                                className="px-8"
                                                onClick={() => window.location.href = "/thankyou"}
                                            >
                                                Skip
                                            </Button>

                                            <Button type="submit" size="lg" className="px-8">
                                                Submit
                                            </Button>
                                        </div>

                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default QuestionsAnswers;
