import { useState, useEffect } from "react";
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
import axios from "axios";

const formSchema = z.object({
    businessSummary: z.string().min(10, "Please provide at least 10 characters"),
    competitors: z.string().min(5, "Please provide at least 5 characters"),
    targetLocations: z.string().min(5, "Please provide at least 5 characters"),
});

type AuditFormData = {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    url: string;
};

const QuestionsAnswers = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [auditFormData, setAuditFormData] = useState<AuditFormData | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem("auditFormData");
        if (stored) {
            try {
                setAuditFormData(JSON.parse(stored) as AuditFormData);
            } catch (e) {
                setAuditFormData(null);
            }
        }
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            businessSummary: "",
            competitors: "",
            targetLocations: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (!auditFormData) {
            toast.error("Please complete the assessment form first.");
            navigate("/auditForm");
            return;
        }

        try {
            const payload = {
                url: auditFormData.url,
                email: auditFormData.email,
                companyName: auditFormData.companyName,
                firstName: auditFormData.firstName,
                lastName: auditFormData.lastName,
                questionAnswers: values,
            };

            const res = await axios.post(
                // "http://localhost:5000/api/v1/submit-form",
                "https://geopilot-dashboard-84n5-backend.vercel.app/api/v1/submit-form",
                payload,
                { headers: { "Content-Type": "application/json" } }
            );

            if (res.status >= 200 && res.status < 300) {
                localStorage.removeItem("auditFormData");
        toast.success("Thank you for your responses! We'll be in touch soon.");
        navigate("/thankyou");
        setIsSubmitted(true);
            } else {
                throw new Error("Unexpected response status");
            }
        } catch (error: unknown) {
            console.error(error);
            let message = "Failed to submit. Please try again.";
            if (axios.isAxiosError(error)) {
                const data = error.response?.data;
                if (typeof data === "string") {
                    message = data;
                } else if (
                    data &&
                    typeof (data as Record<string, unknown>).message === "string"
                ) {
                    message = (data as { message: string }).message;
                }
            }
            toast.error(message);
        }
    };

    const handleSkip = async () => {
        if (!auditFormData || !auditFormData.url || !auditFormData.email) {
            toast.error("Please complete the assessment form first.");
            navigate("/auditForm");
            return;
        }

        try {
            const payload = {
                url: auditFormData.url,
                email: auditFormData.email,
                companyName: auditFormData.companyName,
                firstName: auditFormData.firstName,
                lastName: auditFormData.lastName,
                // store empty answers when skipped
                questionAnswers: {},
            };

            const res = await axios.post(
                "http://localhost:5000/api/v1/submit-form",
                payload,
                { headers: { "Content-Type": "application/json" } }
            );

            if (res.status >= 200 && res.status < 300) {
                localStorage.removeItem("auditFormData");
                navigate("/thankyou");
                setIsSubmitted(true);
            } else {
                throw new Error("Unexpected response status");
            }
        } catch (error: unknown) {
            console.error(error);
            let message = "Failed to submit. Please try again.";
            if (axios.isAxiosError(error)) {
                const data = error.response?.data;
                if (typeof data === "string") {
                    message = data;
                } else if (
                    data &&
                    typeof (data as Record<string, unknown>).message === "string"
                ) {
                    message = (data as { message: string }).message;
                }
            }
            toast.error(message);
        }
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

                                        <div className="flex justify-center gap-4 pt-6">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="lg"
                                                className="px-8"
                                                onClick={handleSkip}
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
